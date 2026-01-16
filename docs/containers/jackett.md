---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22860" onclick="CopyToClipboard('tag22860');return false;" class="tag-decoration">release</div><div id="tag17739" onclick="CopyToClipboard('tag17739');return false;" class="tag-decoration">release-9e30a03</div><div id="tag10647" onclick="CopyToClipboard('tag10647');return false;" class="tag-decoration">release-0.24.863</div><div id="tag31054" onclick="CopyToClipboard('tag31054');return false;" class="tag-decoration">release-v0</div><div id="tag30518" onclick="CopyToClipboard('tag30518');return false;" class="tag-decoration">release-v0.24</div><div id="tag17052" onclick="CopyToClipboard('tag17052');return false;" class="tag-decoration">release-v0.24.863</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/9e30a036018a5910bf23f8934fbac87786c76a38" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21064889573" target="_blank">2026-01-16 11:18:11</a></td></tr>
<tr><td><div id="tag15572" onclick="CopyToClipboard('tag15572');return false;" class="tag-decoration">testing</div><div id="tag3123" onclick="CopyToClipboard('tag3123');return false;" class="tag-decoration">testing-3b7baba</div><div id="tag26922" onclick="CopyToClipboard('tag26922');return false;" class="tag-decoration">testing-0.24.863</div><div id="tag1379" onclick="CopyToClipboard('tag1379');return false;" class="tag-decoration">testing-v0</div><div id="tag27942" onclick="CopyToClipboard('tag27942');return false;" class="tag-decoration">testing-v0.24</div><div id="tag7417" onclick="CopyToClipboard('tag7417');return false;" class="tag-decoration">testing-v0.24.863</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/3b7baba2b820072500b3aabe03c4959a2f2599cd" target="_blank">Upstream update: alpinevpn-c4f8fae => alpinevpn-d6f9da1</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21064890401" target="_blank">2026-01-16 11:18:14</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"

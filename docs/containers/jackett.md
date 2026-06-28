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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5242" onclick="CopyToClipboard('tag5242');return false;" class="tag-decoration">release</div><div id="tag11674" onclick="CopyToClipboard('tag11674');return false;" class="tag-decoration">release-6d59742</div><div id="tag26538" onclick="CopyToClipboard('tag26538');return false;" class="tag-decoration">release-0.24.2135</div><div id="tag12950" onclick="CopyToClipboard('tag12950');return false;" class="tag-decoration">release-v0</div><div id="tag3805" onclick="CopyToClipboard('tag3805');return false;" class="tag-decoration">release-v0.24</div><div id="tag7589" onclick="CopyToClipboard('tag7589');return false;" class="tag-decoration">release-v0.24.2135</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/6d59742286fd5c4577d9e9ddf116cc7545e93609" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28316819133" target="_blank">2026-06-28 08:41:55</a></td></tr>
<tr><td><div id="tag16573" onclick="CopyToClipboard('tag16573');return false;" class="tag-decoration">testing</div><div id="tag11733" onclick="CopyToClipboard('tag11733');return false;" class="tag-decoration">testing-d07f6cf</div><div id="tag9091" onclick="CopyToClipboard('tag9091');return false;" class="tag-decoration">testing-0.24.2135</div><div id="tag11539" onclick="CopyToClipboard('tag11539');return false;" class="tag-decoration">testing-v0</div><div id="tag4246" onclick="CopyToClipboard('tag4246');return false;" class="tag-decoration">testing-v0.24</div><div id="tag4721" onclick="CopyToClipboard('tag4721');return false;" class="tag-decoration">testing-v0.24.2135</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d07f6cf8676baa72ee28e679c7ee82eaac274e51" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28316819661" target="_blank">2026-06-28 08:41:56</a></td></tr>
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

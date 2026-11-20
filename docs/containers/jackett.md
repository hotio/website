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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2993" onclick="CopyToClipboard('tag2993');return false;" class="tag-decoration">release</div><div id="tag27259" onclick="CopyToClipboard('tag27259');return false;" class="tag-decoration">release-85c1502</div><div id="tag18012" onclick="CopyToClipboard('tag18012');return false;" class="tag-decoration">release-0.24.3085</div><div id="tag17507" onclick="CopyToClipboard('tag17507');return false;" class="tag-decoration">release-v0</div><div id="tag7292" onclick="CopyToClipboard('tag7292');return false;" class="tag-decoration">release-v0.24</div><div id="tag31938" onclick="CopyToClipboard('tag31938');return false;" class="tag-decoration">release-v0.24.3085</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/85c15025f0b33433cd254ceb353a431f7fc88582" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/44698442059" target="_blank">2026-11-20 07:54:41</a></td></tr>
<tr><td><div id="tag12264" onclick="CopyToClipboard('tag12264');return false;" class="tag-decoration">testing</div><div id="tag1901" onclick="CopyToClipboard('tag1901');return false;" class="tag-decoration">testing-d4d7c99</div><div id="tag5265" onclick="CopyToClipboard('tag5265');return false;" class="tag-decoration">testing-0.24.3085</div><div id="tag14518" onclick="CopyToClipboard('tag14518');return false;" class="tag-decoration">testing-v0</div><div id="tag25552" onclick="CopyToClipboard('tag25552');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25981" onclick="CopyToClipboard('tag25981');return false;" class="tag-decoration">testing-v0.24.3085</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d4d7c9917b656839cf5ec6704046b208d7809108" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/44698456464" target="_blank">2026-11-20 07:54:48</a></td></tr>
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

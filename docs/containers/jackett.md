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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22753" onclick="CopyToClipboard('tag22753');return false;" class="tag-decoration">release</div><div id="tag19108" onclick="CopyToClipboard('tag19108');return false;" class="tag-decoration">release-71d8752</div><div id="tag3276" onclick="CopyToClipboard('tag3276');return false;" class="tag-decoration">release-0.24.2158</div><div id="tag27668" onclick="CopyToClipboard('tag27668');return false;" class="tag-decoration">release-v0</div><div id="tag26416" onclick="CopyToClipboard('tag26416');return false;" class="tag-decoration">release-v0.24</div><div id="tag11570" onclick="CopyToClipboard('tag11570');return false;" class="tag-decoration">release-v0.24.2158</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/71d8752dd3d8c238d4a9d0936bef77df282171c5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28600483469" target="_blank">2026-07-02 15:07:34</a></td></tr>
<tr><td><div id="tag22166" onclick="CopyToClipboard('tag22166');return false;" class="tag-decoration">testing</div><div id="tag30755" onclick="CopyToClipboard('tag30755');return false;" class="tag-decoration">testing-7cf9596</div><div id="tag10540" onclick="CopyToClipboard('tag10540');return false;" class="tag-decoration">testing-0.24.2166</div><div id="tag32030" onclick="CopyToClipboard('tag32030');return false;" class="tag-decoration">testing-v0</div><div id="tag3896" onclick="CopyToClipboard('tag3896');return false;" class="tag-decoration">testing-v0.24</div><div id="tag333" onclick="CopyToClipboard('tag333');return false;" class="tag-decoration">testing-v0.24.2166</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7cf959676e792c52045d0b85f3b8b783c303fb67" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28642620949" target="_blank">2026-07-03 06:23:18</a></td></tr>
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

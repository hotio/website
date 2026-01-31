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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29712" onclick="CopyToClipboard('tag29712');return false;" class="tag-decoration">release</div><div id="tag20247" onclick="CopyToClipboard('tag20247');return false;" class="tag-decoration">release-87e24a0</div><div id="tag31040" onclick="CopyToClipboard('tag31040');return false;" class="tag-decoration">release-0.24.993</div><div id="tag8270" onclick="CopyToClipboard('tag8270');return false;" class="tag-decoration">release-v0</div><div id="tag14669" onclick="CopyToClipboard('tag14669');return false;" class="tag-decoration">release-v0.24</div><div id="tag5446" onclick="CopyToClipboard('tag5446');return false;" class="tag-decoration">release-v0.24.993</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/87e24a03c9fe6657afbeb745fc98876ef60f56da" target="_blank">Version update: 0.24.988 => 0.24.993</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21539896080" target="_blank">2026-01-31 06:01:29</a></td></tr>
<tr><td><div id="tag3080" onclick="CopyToClipboard('tag3080');return false;" class="tag-decoration">testing</div><div id="tag6448" onclick="CopyToClipboard('tag6448');return false;" class="tag-decoration">testing-930d1f1</div><div id="tag361" onclick="CopyToClipboard('tag361');return false;" class="tag-decoration">testing-0.24.988</div><div id="tag5965" onclick="CopyToClipboard('tag5965');return false;" class="tag-decoration">testing-v0</div><div id="tag7341" onclick="CopyToClipboard('tag7341');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22670" onclick="CopyToClipboard('tag22670');return false;" class="tag-decoration">testing-v0.24.988</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/930d1f1584b915b293bbe561c02617cb6b57865a" target="_blank">Version update: 0.24.980 => 0.24.988</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21506761036" target="_blank">2026-01-30 06:30:18</a></td></tr>
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

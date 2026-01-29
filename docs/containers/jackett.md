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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag354" onclick="CopyToClipboard('tag354');return false;" class="tag-decoration">release</div><div id="tag30645" onclick="CopyToClipboard('tag30645');return false;" class="tag-decoration">release-ffd0e21</div><div id="tag22445" onclick="CopyToClipboard('tag22445');return false;" class="tag-decoration">release-0.24.980</div><div id="tag16521" onclick="CopyToClipboard('tag16521');return false;" class="tag-decoration">release-v0</div><div id="tag23930" onclick="CopyToClipboard('tag23930');return false;" class="tag-decoration">release-v0.24</div><div id="tag14003" onclick="CopyToClipboard('tag14003');return false;" class="tag-decoration">release-v0.24.980</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ffd0e21cc22f1ad67db9ad93b1e8ca0a16573f69" target="_blank">Version update: 0.24.957 => 0.24.980</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21466928638" target="_blank">2026-01-29 05:32:58</a></td></tr>
<tr><td><div id="tag11183" onclick="CopyToClipboard('tag11183');return false;" class="tag-decoration">testing</div><div id="tag1442" onclick="CopyToClipboard('tag1442');return false;" class="tag-decoration">testing-fa5c008</div><div id="tag17636" onclick="CopyToClipboard('tag17636');return false;" class="tag-decoration">testing-0.24.980</div><div id="tag29062" onclick="CopyToClipboard('tag29062');return false;" class="tag-decoration">testing-v0</div><div id="tag31389" onclick="CopyToClipboard('tag31389');return false;" class="tag-decoration">testing-v0.24</div><div id="tag18407" onclick="CopyToClipboard('tag18407');return false;" class="tag-decoration">testing-v0.24.980</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/fa5c008db15f515354bd01474a7a66a6b1e393a1" target="_blank">Version update: 0.24.957 => 0.24.980</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21466929224" target="_blank">2026-01-29 05:33:01</a></td></tr>
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

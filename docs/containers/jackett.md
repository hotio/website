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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8685" onclick="CopyToClipboard('tag8685');return false;" class="tag-decoration">release</div><div id="tag15962" onclick="CopyToClipboard('tag15962');return false;" class="tag-decoration">release-ee5ed40</div><div id="tag5852" onclick="CopyToClipboard('tag5852');return false;" class="tag-decoration">release-0.24.2541</div><div id="tag9868" onclick="CopyToClipboard('tag9868');return false;" class="tag-decoration">release-v0</div><div id="tag19292" onclick="CopyToClipboard('tag19292');return false;" class="tag-decoration">release-v0.24</div><div id="tag20457" onclick="CopyToClipboard('tag20457');return false;" class="tag-decoration">release-v0.24.2541</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ee5ed4070221c8b61748a0ede8aa129a0d85082a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34026113901" target="_blank">2026-09-06 09:58:21</a></td></tr>
<tr><td><div id="tag22861" onclick="CopyToClipboard('tag22861');return false;" class="tag-decoration">testing</div><div id="tag954" onclick="CopyToClipboard('tag954');return false;" class="tag-decoration">testing-eebc113</div><div id="tag22886" onclick="CopyToClipboard('tag22886');return false;" class="tag-decoration">testing-0.24.2541</div><div id="tag20558" onclick="CopyToClipboard('tag20558');return false;" class="tag-decoration">testing-v0</div><div id="tag9559" onclick="CopyToClipboard('tag9559');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9016" onclick="CopyToClipboard('tag9016');return false;" class="tag-decoration">testing-v0.24.2541</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/eebc1130eb638beab184331a23a562d30ba02a9e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/34026113447" target="_blank">2026-09-06 09:58:19</a></td></tr>
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

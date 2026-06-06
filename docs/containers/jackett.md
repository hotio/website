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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12647" onclick="CopyToClipboard('tag12647');return false;" class="tag-decoration">release</div><div id="tag22675" onclick="CopyToClipboard('tag22675');return false;" class="tag-decoration">release-e56ff25</div><div id="tag3905" onclick="CopyToClipboard('tag3905');return false;" class="tag-decoration">release-0.24.2027</div><div id="tag29059" onclick="CopyToClipboard('tag29059');return false;" class="tag-decoration">release-v0</div><div id="tag2143" onclick="CopyToClipboard('tag2143');return false;" class="tag-decoration">release-v0.24</div><div id="tag22221" onclick="CopyToClipboard('tag22221');return false;" class="tag-decoration">release-v0.24.2027</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e56ff25f70fc4bcdf402e6fb4d30031636788c3e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27056497048" target="_blank">2026-06-06 07:41:35</a></td></tr>
<tr><td><div id="tag1751" onclick="CopyToClipboard('tag1751');return false;" class="tag-decoration">testing</div><div id="tag5259" onclick="CopyToClipboard('tag5259');return false;" class="tag-decoration">testing-beb7c58</div><div id="tag19645" onclick="CopyToClipboard('tag19645');return false;" class="tag-decoration">testing-0.24.2021</div><div id="tag30498" onclick="CopyToClipboard('tag30498');return false;" class="tag-decoration">testing-v0</div><div id="tag11191" onclick="CopyToClipboard('tag11191');return false;" class="tag-decoration">testing-v0.24</div><div id="tag88" onclick="CopyToClipboard('tag88');return false;" class="tag-decoration">testing-v0.24.2021</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/beb7c5842479567d047f5e2ae14d0f5db2699bc4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27000578342" target="_blank">2026-06-05 07:00:42</a></td></tr>
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

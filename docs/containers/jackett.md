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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29467" onclick="CopyToClipboard('tag29467');return false;" class="tag-decoration">release</div><div id="tag2569" onclick="CopyToClipboard('tag2569');return false;" class="tag-decoration">release-67d3b45</div><div id="tag17786" onclick="CopyToClipboard('tag17786');return false;" class="tag-decoration">release-0.24.2116</div><div id="tag2706" onclick="CopyToClipboard('tag2706');return false;" class="tag-decoration">release-v0</div><div id="tag18038" onclick="CopyToClipboard('tag18038');return false;" class="tag-decoration">release-v0.24</div><div id="tag5408" onclick="CopyToClipboard('tag5408');return false;" class="tag-decoration">release-v0.24.2116</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/67d3b458e3b61b19ae2587c17da9aa26558be9f1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28080172866" target="_blank">2026-06-24 06:38:08</a></td></tr>
<tr><td><div id="tag5466" onclick="CopyToClipboard('tag5466');return false;" class="tag-decoration">testing</div><div id="tag25099" onclick="CopyToClipboard('tag25099');return false;" class="tag-decoration">testing-39663bd</div><div id="tag29361" onclick="CopyToClipboard('tag29361');return false;" class="tag-decoration">testing-0.24.2116</div><div id="tag15314" onclick="CopyToClipboard('tag15314');return false;" class="tag-decoration">testing-v0</div><div id="tag19672" onclick="CopyToClipboard('tag19672');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22392" onclick="CopyToClipboard('tag22392');return false;" class="tag-decoration">testing-v0.24.2116</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/39663bd06b172cee858a8f321122bd95a98de511" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28080173724" target="_blank">2026-06-24 06:38:09</a></td></tr>
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

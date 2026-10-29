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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32592" onclick="CopyToClipboard('tag32592');return false;" class="tag-decoration">release</div><div id="tag5769" onclick="CopyToClipboard('tag5769');return false;" class="tag-decoration">release-97df5e1</div><div id="tag414" onclick="CopyToClipboard('tag414');return false;" class="tag-decoration">release-0.24.2949</div><div id="tag26922" onclick="CopyToClipboard('tag26922');return false;" class="tag-decoration">release-v0</div><div id="tag2260" onclick="CopyToClipboard('tag2260');return false;" class="tag-decoration">release-v0.24</div><div id="tag29937" onclick="CopyToClipboard('tag29937');return false;" class="tag-decoration">release-v0.24.2949</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/97df5e19d074e656891535dd69544c3a902d4aa0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40670249455" target="_blank">2026-10-28 10:12:15</a></td></tr>
<tr><td><div id="tag5649" onclick="CopyToClipboard('tag5649');return false;" class="tag-decoration">testing</div><div id="tag15047" onclick="CopyToClipboard('tag15047');return false;" class="tag-decoration">testing-41e40a9</div><div id="tag13169" onclick="CopyToClipboard('tag13169');return false;" class="tag-decoration">testing-0.24.2961</div><div id="tag31806" onclick="CopyToClipboard('tag31806');return false;" class="tag-decoration">testing-v0</div><div id="tag23547" onclick="CopyToClipboard('tag23547');return false;" class="tag-decoration">testing-v0.24</div><div id="tag29450" onclick="CopyToClipboard('tag29450');return false;" class="tag-decoration">testing-v0.24.2961</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/41e40a9373efa99b12b8faa96c936e85b4d7f120" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40838225764" target="_blank">2026-10-29 07:52:25</a></td></tr>
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

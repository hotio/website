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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13243" onclick="CopyToClipboard('tag13243');return false;" class="tag-decoration">release</div><div id="tag11690" onclick="CopyToClipboard('tag11690');return false;" class="tag-decoration">release-97df5e1</div><div id="tag19590" onclick="CopyToClipboard('tag19590');return false;" class="tag-decoration">release-0.24.2949</div><div id="tag10100" onclick="CopyToClipboard('tag10100');return false;" class="tag-decoration">release-v0</div><div id="tag23986" onclick="CopyToClipboard('tag23986');return false;" class="tag-decoration">release-v0.24</div><div id="tag24465" onclick="CopyToClipboard('tag24465');return false;" class="tag-decoration">release-v0.24.2949</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/97df5e19d074e656891535dd69544c3a902d4aa0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40670249455" target="_blank">2026-10-28 10:12:15</a></td></tr>
<tr><td><div id="tag32537" onclick="CopyToClipboard('tag32537');return false;" class="tag-decoration">testing</div><div id="tag3587" onclick="CopyToClipboard('tag3587');return false;" class="tag-decoration">testing-56f9dd1</div><div id="tag16567" onclick="CopyToClipboard('tag16567');return false;" class="tag-decoration">testing-0.24.2934</div><div id="tag31691" onclick="CopyToClipboard('tag31691');return false;" class="tag-decoration">testing-v0</div><div id="tag22481" onclick="CopyToClipboard('tag22481');return false;" class="tag-decoration">testing-v0.24</div><div id="tag7542" onclick="CopyToClipboard('tag7542');return false;" class="tag-decoration">testing-v0.24.2934</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/56f9dd101e2bfa003fbb6aedd25e076380ec0be5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40566230303" target="_blank">2026-10-27 19:07:21</a></td></tr>
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

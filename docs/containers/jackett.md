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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19465" onclick="CopyToClipboard('tag19465');return false;" class="tag-decoration">release</div><div id="tag6919" onclick="CopyToClipboard('tag6919');return false;" class="tag-decoration">release-9bf78c4</div><div id="tag6921" onclick="CopyToClipboard('tag6921');return false;" class="tag-decoration">release-0.24.1846</div><div id="tag24844" onclick="CopyToClipboard('tag24844');return false;" class="tag-decoration">release-v0</div><div id="tag15392" onclick="CopyToClipboard('tag15392');return false;" class="tag-decoration">release-v0.24</div><div id="tag18035" onclick="CopyToClipboard('tag18035');return false;" class="tag-decoration">release-v0.24.1846</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/9bf78c40bfa7c30e7501957d4de35bebbd17af91" target="_blank">Version update: 0.24.1841 => 0.24.1846</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25721739974" target="_blank">2026-05-12 08:05:24</a></td></tr>
<tr><td><div id="tag14056" onclick="CopyToClipboard('tag14056');return false;" class="tag-decoration">testing</div><div id="tag29214" onclick="CopyToClipboard('tag29214');return false;" class="tag-decoration">testing-6ccd45f</div><div id="tag27305" onclick="CopyToClipboard('tag27305');return false;" class="tag-decoration">testing-0.24.1841</div><div id="tag21768" onclick="CopyToClipboard('tag21768');return false;" class="tag-decoration">testing-v0</div><div id="tag820" onclick="CopyToClipboard('tag820');return false;" class="tag-decoration">testing-v0.24</div><div id="tag1613" onclick="CopyToClipboard('tag1613');return false;" class="tag-decoration">testing-v0.24.1841</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6ccd45fdeb952b8ac234a905496c6d4de141ed17" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25714912367" target="_blank">2026-05-12 05:15:18</a></td></tr>
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

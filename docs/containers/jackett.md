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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15033" onclick="CopyToClipboard('tag15033');return false;" class="tag-decoration">release</div><div id="tag29727" onclick="CopyToClipboard('tag29727');return false;" class="tag-decoration">release-647d488</div><div id="tag26823" onclick="CopyToClipboard('tag26823');return false;" class="tag-decoration">release-0.24.1867</div><div id="tag12072" onclick="CopyToClipboard('tag12072');return false;" class="tag-decoration">release-v0</div><div id="tag16697" onclick="CopyToClipboard('tag16697');return false;" class="tag-decoration">release-v0.24</div><div id="tag28794" onclick="CopyToClipboard('tag28794');return false;" class="tag-decoration">release-v0.24.1867</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/647d48873117cadcacdb825dbfb50165d43377e4" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25956645225" target="_blank">2026-05-16 07:52:55</a></td></tr>
<tr><td><div id="tag25719" onclick="CopyToClipboard('tag25719');return false;" class="tag-decoration">testing</div><div id="tag12070" onclick="CopyToClipboard('tag12070');return false;" class="tag-decoration">testing-657fd43</div><div id="tag26402" onclick="CopyToClipboard('tag26402');return false;" class="tag-decoration">testing-0.24.1867</div><div id="tag18511" onclick="CopyToClipboard('tag18511');return false;" class="tag-decoration">testing-v0</div><div id="tag17693" onclick="CopyToClipboard('tag17693');return false;" class="tag-decoration">testing-v0.24</div><div id="tag8899" onclick="CopyToClipboard('tag8899');return false;" class="tag-decoration">testing-v0.24.1867</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/657fd43ceea6f02e5f5079de91f05bdc17d5f98d" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25956645937" target="_blank">2026-05-16 07:52:58</a></td></tr>
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

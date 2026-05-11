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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1651" onclick="CopyToClipboard('tag1651');return false;" class="tag-decoration">release</div><div id="tag19056" onclick="CopyToClipboard('tag19056');return false;" class="tag-decoration">release-208dad8</div><div id="tag5975" onclick="CopyToClipboard('tag5975');return false;" class="tag-decoration">release-0.24.1841</div><div id="tag2288" onclick="CopyToClipboard('tag2288');return false;" class="tag-decoration">release-v0</div><div id="tag31208" onclick="CopyToClipboard('tag31208');return false;" class="tag-decoration">release-v0.24</div><div id="tag4658" onclick="CopyToClipboard('tag4658');return false;" class="tag-decoration">release-v0.24.1841</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/208dad891f1bb2b03211a8acb9b9d5e73e56ed51" target="_blank">Upstream/Packages update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25698807935" target="_blank">2026-05-11 21:37:29</a></td></tr>
<tr><td><div id="tag12697" onclick="CopyToClipboard('tag12697');return false;" class="tag-decoration">testing</div><div id="tag12670" onclick="CopyToClipboard('tag12670');return false;" class="tag-decoration">testing-e686fb6</div><div id="tag25301" onclick="CopyToClipboard('tag25301');return false;" class="tag-decoration">testing-0.24.1841</div><div id="tag30366" onclick="CopyToClipboard('tag30366');return false;" class="tag-decoration">testing-v0</div><div id="tag5497" onclick="CopyToClipboard('tag5497');return false;" class="tag-decoration">testing-v0.24</div><div id="tag31922" onclick="CopyToClipboard('tag31922');return false;" class="tag-decoration">testing-v0.24.1841</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/e686fb65c9b638219757610957040d7d5a5fa7cb" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25700237462" target="_blank">2026-05-11 22:09:14</a></td></tr>
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

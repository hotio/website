---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10876" onclick="CopyToClipboard('tag10876');return false;" class="tag-decoration">release</div><div id="tag16251" onclick="CopyToClipboard('tag16251');return false;" class="tag-decoration">release-f2ea9c5</div><div id="tag17202" onclick="CopyToClipboard('tag17202');return false;" class="tag-decoration">release-8.8.1</div><div id="tag15676" onclick="CopyToClipboard('tag15676');return false;" class="tag-decoration">release-v8</div><div id="tag19752" onclick="CopyToClipboard('tag19752');return false;" class="tag-decoration">release-v8.8</div><div id="tag8478" onclick="CopyToClipboard('tag8478');return false;" class="tag-decoration">release-v8.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/f2ea9c5248ea4d8de2bab85bcaa807e173eb372a" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/25714944301" target="_blank">2026-05-12 05:16:17</a></td></tr>
<tr><td><div id="tag6705" onclick="CopyToClipboard('tag6705');return false;" class="tag-decoration">testing</div><div id="tag1412" onclick="CopyToClipboard('tag1412');return false;" class="tag-decoration">testing-eea75da</div><div id="tag4676" onclick="CopyToClipboard('tag4676');return false;" class="tag-decoration">testing-8.8.1</div><div id="tag12292" onclick="CopyToClipboard('tag12292');return false;" class="tag-decoration">testing-v8</div><div id="tag16475" onclick="CopyToClipboard('tag16475');return false;" class="tag-decoration">testing-v8.8</div><div id="tag11274" onclick="CopyToClipboard('tag11274');return false;" class="tag-decoration">testing-v8.8.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/eea75daa0f1dccbf4378297c2fafc291dbb13d22" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/25714947924" target="_blank">2026-05-12 05:16:24</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"

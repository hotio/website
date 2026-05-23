---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag16114" onclick="CopyToClipboard('tag16114');return false;" class="tag-decoration">nightly</div><div id="tag6843" onclick="CopyToClipboard('tag6843');return false;" class="tag-decoration">nightly-cf2c63a</div><div id="tag22180" onclick="CopyToClipboard('tag22180');return false;" class="tag-decoration">nightly-2f4750f77d053665b50556f82852d5cb791a1737</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/cf2c63a2a6ce0ae3326661bf111f126121078f87" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26311016474" target="_blank">2026-05-22 20:43:09</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7947" onclick="CopyToClipboard('tag7947');return false;" class="tag-decoration">release</div><div id="tag9206" onclick="CopyToClipboard('tag9206');return false;" class="tag-decoration">release-d9901aa</div><div id="tag5973" onclick="CopyToClipboard('tag5973');return false;" class="tag-decoration">release-5.0.3</div><div id="tag9492" onclick="CopyToClipboard('tag9492');return false;" class="tag-decoration">release-v5</div><div id="tag12500" onclick="CopyToClipboard('tag12500');return false;" class="tag-decoration">release-v5.0</div><div id="tag4849" onclick="CopyToClipboard('tag4849');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/d9901aa1c30a39f40fe1fd6e520d4d8a5d2c2577" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26334082571" target="_blank">2026-05-23 13:34:17</a></td></tr>
<tr><td><div id="tag32179" onclick="CopyToClipboard('tag32179');return false;" class="tag-decoration">testing</div><div id="tag21438" onclick="CopyToClipboard('tag21438');return false;" class="tag-decoration">testing-5cda10d</div><div id="tag31987" onclick="CopyToClipboard('tag31987');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag9653" onclick="CopyToClipboard('tag9653');return false;" class="tag-decoration">testing-v5</div><div id="tag511" onclick="CopyToClipboard('tag511');return false;" class="tag-decoration">testing-v5.0</div><div id="tag14176" onclick="CopyToClipboard('tag14176');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5cda10d55ee8d2282773042ccf76b4e9f06b1a65" target="_blank">fix warn</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26082311366" target="_blank">2026-05-19 07:16:02</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"

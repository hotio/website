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
<tr><td><div id="tag24095" onclick="CopyToClipboard('tag24095');return false;" class="tag-decoration">nightly</div><div id="tag24285" onclick="CopyToClipboard('tag24285');return false;" class="tag-decoration">nightly-03aed43</div><div id="tag12012" onclick="CopyToClipboard('tag12012');return false;" class="tag-decoration">nightly-a8751c5e77cea4753d139bd785eef05ad99d22f0</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/03aed4352361b9fb5f8e17c746712cb4860cf915" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26046051900" target="_blank">2026-05-18 16:22:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14342" onclick="CopyToClipboard('tag14342');return false;" class="tag-decoration">release</div><div id="tag16876" onclick="CopyToClipboard('tag16876');return false;" class="tag-decoration">release-f14120f</div><div id="tag21095" onclick="CopyToClipboard('tag21095');return false;" class="tag-decoration">release-5.0.3</div><div id="tag24292" onclick="CopyToClipboard('tag24292');return false;" class="tag-decoration">release-v5</div><div id="tag2429" onclick="CopyToClipboard('tag2429');return false;" class="tag-decoration">release-v5.0</div><div id="tag31275" onclick="CopyToClipboard('tag31275');return false;" class="tag-decoration">release-v5.0.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f14120f5b2a70ca59916b20ab54478aa4d1aecee" target="_blank">fix warn</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26082287675" target="_blank">2026-05-19 07:15:28</a></td></tr>
<tr><td><div id="tag23299" onclick="CopyToClipboard('tag23299');return false;" class="tag-decoration">testing</div><div id="tag20933" onclick="CopyToClipboard('tag20933');return false;" class="tag-decoration">testing-5cda10d</div><div id="tag28611" onclick="CopyToClipboard('tag28611');return false;" class="tag-decoration">testing-5.0.3</div><div id="tag18719" onclick="CopyToClipboard('tag18719');return false;" class="tag-decoration">testing-v5</div><div id="tag1550" onclick="CopyToClipboard('tag1550');return false;" class="tag-decoration">testing-v5.0</div><div id="tag9448" onclick="CopyToClipboard('tag9448');return false;" class="tag-decoration">testing-v5.0.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5cda10d55ee8d2282773042ccf76b4e9f06b1a65" target="_blank">fix warn</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/26082311366" target="_blank">2026-05-19 07:16:02</a></td></tr>
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

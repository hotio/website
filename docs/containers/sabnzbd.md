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
<tr><td><div id="tag4208" onclick="CopyToClipboard('tag4208');return false;" class="tag-decoration">nightly</div><div id="tag31483" onclick="CopyToClipboard('tag31483');return false;" class="tag-decoration">nightly-d35ad32</div><div id="tag31568" onclick="CopyToClipboard('tag31568');return false;" class="tag-decoration">nightly-7df1f19f03c410c6cf70dd860bfcfa211b44b2f7</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/d35ad320ddd190596b99a445a25829b56397e26a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/42094531111" target="_blank">2026-11-05 19:30:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15372" onclick="CopyToClipboard('tag15372');return false;" class="tag-decoration">release</div><div id="tag16225" onclick="CopyToClipboard('tag16225');return false;" class="tag-decoration">release-eeb191e</div><div id="tag1147" onclick="CopyToClipboard('tag1147');return false;" class="tag-decoration">release-5.1.3</div><div id="tag14401" onclick="CopyToClipboard('tag14401');return false;" class="tag-decoration">release-v5</div><div id="tag11698" onclick="CopyToClipboard('tag11698');return false;" class="tag-decoration">release-v5.1</div><div id="tag9265" onclick="CopyToClipboard('tag9265');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/eeb191e8c8e0e417f21fddef265275f05fa462fd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/41925061244" target="_blank">2026-11-04 22:24:50</a></td></tr>
<tr><td><div id="tag17913" onclick="CopyToClipboard('tag17913');return false;" class="tag-decoration">testing</div><div id="tag12211" onclick="CopyToClipboard('tag12211');return false;" class="tag-decoration">testing-f1d8065</div><div id="tag4697" onclick="CopyToClipboard('tag4697');return false;" class="tag-decoration">testing-5.2.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/f1d80652ef7eff0b4cd8cb801491f2a1f48ae085" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/41925060898" target="_blank">2026-11-04 22:24:49</a></td></tr>
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

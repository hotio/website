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
<tr><td><div id="tag13566" onclick="CopyToClipboard('tag13566');return false;" class="tag-decoration">nightly</div><div id="tag22782" onclick="CopyToClipboard('tag22782');return false;" class="tag-decoration">nightly-45b257d</div><div id="tag28609" onclick="CopyToClipboard('tag28609');return false;" class="tag-decoration">nightly-4a0086d77c48c74b3ea4cd1524a5dd09e433dc27</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/45b257d833354543d423f592c3dc7287bf9bedcc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45013848541" target="_blank">2026-11-22 10:43:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag1498" onclick="CopyToClipboard('tag1498');return false;" class="tag-decoration">release</div><div id="tag28584" onclick="CopyToClipboard('tag28584');return false;" class="tag-decoration">release-c26e572</div><div id="tag30592" onclick="CopyToClipboard('tag30592');return false;" class="tag-decoration">release-5.1.3</div><div id="tag978" onclick="CopyToClipboard('tag978');return false;" class="tag-decoration">release-v5</div><div id="tag25905" onclick="CopyToClipboard('tag25905');return false;" class="tag-decoration">release-v5.1</div><div id="tag21614" onclick="CopyToClipboard('tag21614');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/c26e572eafcace73d39d1fefa3403bb2264af6d8" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/44845048776" target="_blank">2026-11-21 00:37:22</a></td></tr>
<tr><td><div id="tag8959" onclick="CopyToClipboard('tag8959');return false;" class="tag-decoration">testing</div><div id="tag1544" onclick="CopyToClipboard('tag1544');return false;" class="tag-decoration">testing-04d5a38</div><div id="tag20100" onclick="CopyToClipboard('tag20100');return false;" class="tag-decoration">testing-5.2.0RC2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/04d5a382d6bb886864b2f91e60b43aeb572ca7bd" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/44845042592" target="_blank">2026-11-21 00:37:19</a></td></tr>
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

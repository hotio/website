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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29028" onclick="CopyToClipboard('tag29028');return false;" class="tag-decoration">release</div><div id="tag31387" onclick="CopyToClipboard('tag31387');return false;" class="tag-decoration">release-ec8ef55</div><div id="tag19934" onclick="CopyToClipboard('tag19934');return false;" class="tag-decoration">release-9.1.1</div><div id="tag1445" onclick="CopyToClipboard('tag1445');return false;" class="tag-decoration">release-v9</div><div id="tag30644" onclick="CopyToClipboard('tag30644');return false;" class="tag-decoration">release-v9.1</div><div id="tag31317" onclick="CopyToClipboard('tag31317');return false;" class="tag-decoration">release-v9.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/ec8ef55ab8b6f3f0cb5393087635de0e09054a82" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/37458773501" target="_blank">2026-10-06 11:47:36</a></td></tr>
<tr><td><div id="tag26526" onclick="CopyToClipboard('tag26526');return false;" class="tag-decoration">testing</div><div id="tag3660" onclick="CopyToClipboard('tag3660');return false;" class="tag-decoration">testing-04d3f7a</div><div id="tag5136" onclick="CopyToClipboard('tag5136');return false;" class="tag-decoration">testing-9.1.1</div><div id="tag27354" onclick="CopyToClipboard('tag27354');return false;" class="tag-decoration">testing-v9</div><div id="tag17643" onclick="CopyToClipboard('tag17643');return false;" class="tag-decoration">testing-v9.1</div><div id="tag21557" onclick="CopyToClipboard('tag21557');return false;" class="tag-decoration">testing-v9.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/04d3f7ab572769d7aa45c7727acf1c047166938a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36989262391" target="_blank">2026-10-02 09:20:57</a></td></tr>
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

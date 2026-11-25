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
<tr><td><div id="tag7945" onclick="CopyToClipboard('tag7945');return false;" class="tag-decoration">nightly</div><div id="tag5252" onclick="CopyToClipboard('tag5252');return false;" class="tag-decoration">nightly-fd23c79</div><div id="tag21197" onclick="CopyToClipboard('tag21197');return false;" class="tag-decoration">nightly-730e90bc9f99a49082a6b46b10e9cd1d818ac948</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/fd23c79a57d3941e60f67d83aef11aa20106111f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45517402046" target="_blank">2026-11-25 00:21:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6664" onclick="CopyToClipboard('tag6664');return false;" class="tag-decoration">release</div><div id="tag8968" onclick="CopyToClipboard('tag8968');return false;" class="tag-decoration">release-0f6cdf6</div><div id="tag8919" onclick="CopyToClipboard('tag8919');return false;" class="tag-decoration">release-5.1.3</div><div id="tag632" onclick="CopyToClipboard('tag632');return false;" class="tag-decoration">release-v5</div><div id="tag28257" onclick="CopyToClipboard('tag28257');return false;" class="tag-decoration">release-v5.1</div><div id="tag8106" onclick="CopyToClipboard('tag8106');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/0f6cdf6d6d0a668d6874e252f6984d9771ef4f07" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45426488147" target="_blank">2026-11-24 15:31:22</a></td></tr>
<tr><td><div id="tag25017" onclick="CopyToClipboard('tag25017');return false;" class="tag-decoration">testing</div><div id="tag26230" onclick="CopyToClipboard('tag26230');return false;" class="tag-decoration">testing-780e6ef</div><div id="tag1541" onclick="CopyToClipboard('tag1541');return false;" class="tag-decoration">testing-5.2.0RC2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/780e6ef7d1c06e600cd0299b1fb9bd7ce27e8909" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/45426486599" target="_blank">2026-11-24 15:31:22</a></td></tr>
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

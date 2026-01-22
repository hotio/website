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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18590" onclick="CopyToClipboard('tag18590');return false;" class="tag-decoration">release</div><div id="tag28730" onclick="CopyToClipboard('tag28730');return false;" class="tag-decoration">release-c7d10d1</div><div id="tag14042" onclick="CopyToClipboard('tag14042');return false;" class="tag-decoration">release-8.3.0</div><div id="tag21074" onclick="CopyToClipboard('tag21074');return false;" class="tag-decoration">release-v8</div><div id="tag1372" onclick="CopyToClipboard('tag1372');return false;" class="tag-decoration">release-v8.3</div><div id="tag14893" onclick="CopyToClipboard('tag14893');return false;" class="tag-decoration">release-v8.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/c7d10d1100ce3fd5b88ec5a518da76735afaa587" target="_blank">Upstream update: noblevpn-6fa044b => noblevpn-9c1903d</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21243850058" target="_blank">2026-01-22 09:51:27</a></td></tr>
<tr><td><div id="tag17462" onclick="CopyToClipboard('tag17462');return false;" class="tag-decoration">testing</div><div id="tag21053" onclick="CopyToClipboard('tag21053');return false;" class="tag-decoration">testing-b23410a</div><div id="tag5242" onclick="CopyToClipboard('tag5242');return false;" class="tag-decoration">testing-8.3.0</div><div id="tag20615" onclick="CopyToClipboard('tag20615');return false;" class="tag-decoration">testing-v8</div><div id="tag28047" onclick="CopyToClipboard('tag28047');return false;" class="tag-decoration">testing-v8.3</div><div id="tag26375" onclick="CopyToClipboard('tag26375');return false;" class="tag-decoration">testing-v8.3.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b23410a39b61dcf8ac1e663e6392c4aaa4a4101b" target="_blank">Upstream update: noblevpn-6fa044b => noblevpn-9c1903d</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/21243850726" target="_blank">2026-01-22 09:51:28</a></td></tr>
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

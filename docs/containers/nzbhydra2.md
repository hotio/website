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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31861" onclick="CopyToClipboard('tag31861');return false;" class="tag-decoration">release</div><div id="tag20058" onclick="CopyToClipboard('tag20058');return false;" class="tag-decoration">release-8.2.2</div><div id="tag25680" onclick="CopyToClipboard('tag25680');return false;" class="tag-decoration">release-5fc57da</div><div id="tag8459" onclick="CopyToClipboard('tag8459');return false;" class="tag-decoration">release-v8</div><div id="tag19326" onclick="CopyToClipboard('tag19326');return false;" class="tag-decoration">release-v8.2</div><div id="tag12304" onclick="CopyToClipboard('tag12304');return false;" class="tag-decoration">release-v8.2.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/5fc57da18e9a67631f456b752b1bb5a2ab4d1c62" target="_blank">Upstream update: noblevpn-c55f8d5 => noblevpn-b820b9e</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20895141623" target="_blank">2026-01-11 12:28:57</a></td></tr>
<tr><td><div id="tag24961" onclick="CopyToClipboard('tag24961');return false;" class="tag-decoration">testing</div><div id="tag22181" onclick="CopyToClipboard('tag22181');return false;" class="tag-decoration">testing-8.2.2</div><div id="tag17632" onclick="CopyToClipboard('tag17632');return false;" class="tag-decoration">testing-b33e865</div><div id="tag5515" onclick="CopyToClipboard('tag5515');return false;" class="tag-decoration">testing-v8</div><div id="tag22770" onclick="CopyToClipboard('tag22770');return false;" class="tag-decoration">testing-v8.2</div><div id="tag22537" onclick="CopyToClipboard('tag22537');return false;" class="tag-decoration">testing-v8.2.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/b33e8650f13f53223258ae2351a072ff6ea86277" target="_blank">Version update: 8.2.1 => 8.2.2</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/20894295106" target="_blank">2026-01-11 11:21:04</a></td></tr>
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
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

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
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"

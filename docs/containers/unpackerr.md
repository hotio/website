---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag18251" onclick="CopyToClipboard('tag18251');return false;" class="tag-decoration">nightly</div><div id="tag23644" onclick="CopyToClipboard('tag23644');return false;" class="tag-decoration">nightly-2259677</div><div id="tag32679" onclick="CopyToClipboard('tag32679');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/2259677751eeb5e584c470f31f71f724c57fd818" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21243880216" target="_blank">2026-01-22 09:52:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29025" onclick="CopyToClipboard('tag29025');return false;" class="tag-decoration">release</div><div id="tag272" onclick="CopyToClipboard('tag272');return false;" class="tag-decoration">release-9e59708</div><div id="tag12929" onclick="CopyToClipboard('tag12929');return false;" class="tag-decoration">release-0.14.5</div><div id="tag8565" onclick="CopyToClipboard('tag8565');return false;" class="tag-decoration">release-v0</div><div id="tag13966" onclick="CopyToClipboard('tag13966');return false;" class="tag-decoration">release-v0.14</div><div id="tag25251" onclick="CopyToClipboard('tag25251');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/9e5970840c307c420c15cb37deba21e99ba9cbeb" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21243880799" target="_blank">2026-01-22 09:52:27</a></td></tr>
<tr><td><div id="tag27794" onclick="CopyToClipboard('tag27794');return false;" class="tag-decoration">testing</div><div id="tag16592" onclick="CopyToClipboard('tag16592');return false;" class="tag-decoration">testing-7fb5ffd</div><div id="tag24053" onclick="CopyToClipboard('tag24053');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag4992" onclick="CopyToClipboard('tag4992');return false;" class="tag-decoration">testing-v0</div><div id="tag19522" onclick="CopyToClipboard('tag19522');return false;" class="tag-decoration">testing-v0.14</div><div id="tag12892" onclick="CopyToClipboard('tag12892');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/7fb5ffd7ecb618cc70df596e91f2a300b7c614ea" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21243881886" target="_blank">2026-01-22 09:52:29</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"

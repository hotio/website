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
<tr><td><div id="tag12149" onclick="CopyToClipboard('tag12149');return false;" class="tag-decoration">nightly</div><div id="tag21298" onclick="CopyToClipboard('tag21298');return false;" class="tag-decoration">nightly-2259677</div><div id="tag8456" onclick="CopyToClipboard('tag8456');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/2259677751eeb5e584c470f31f71f724c57fd818" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21243880216" target="_blank">2026-01-22 09:52:26</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7520" onclick="CopyToClipboard('tag7520');return false;" class="tag-decoration">release</div><div id="tag6338" onclick="CopyToClipboard('tag6338');return false;" class="tag-decoration">release-9e59708</div><div id="tag23202" onclick="CopyToClipboard('tag23202');return false;" class="tag-decoration">release-0.14.5</div><div id="tag963" onclick="CopyToClipboard('tag963');return false;" class="tag-decoration">release-v0</div><div id="tag16033" onclick="CopyToClipboard('tag16033');return false;" class="tag-decoration">release-v0.14</div><div id="tag11110" onclick="CopyToClipboard('tag11110');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/9e5970840c307c420c15cb37deba21e99ba9cbeb" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21243880799" target="_blank">2026-01-22 09:52:27</a></td></tr>
<tr><td><div id="tag16992" onclick="CopyToClipboard('tag16992');return false;" class="tag-decoration">testing</div><div id="tag11363" onclick="CopyToClipboard('tag11363');return false;" class="tag-decoration">testing-56eca4c</div><div id="tag32234" onclick="CopyToClipboard('tag32234');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag28442" onclick="CopyToClipboard('tag28442');return false;" class="tag-decoration">testing-v0</div><div id="tag17444" onclick="CopyToClipboard('tag17444');return false;" class="tag-decoration">testing-v0.14</div><div id="tag32692" onclick="CopyToClipboard('tag32692');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/56eca4cc67b14fe7a2d702fef0f452508aee6d8d" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21244736110" target="_blank">2026-01-22 10:20:22</a></td></tr>
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
